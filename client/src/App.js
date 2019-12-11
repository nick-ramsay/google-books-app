import React, { Component } from 'react';
import API from "./utils/API";
import BookSearch from "./components/BookSearch/BookSearch";
import BookResults from "./components/BookResults/BookResults";
import logo from './logo.svg';
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
    console.log(this.state.bookSearch);
  };

  handleBookSearch = event => {
    event.preventDefault();
    console.log("Clicked search!");
    API.getBookResults(this.state.bookSearch).then(res => /*console.log(res.data.items)*/this.setState({ booksData: res.data.items }))
    console.log(this.state.booksData);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Google Books</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">Search</a>
              <a className="nav-item nav-link" href="#">Saved</a>
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
          <BookSearch
            handleSearchChange={this.handleSearchChange}
            handleBookSearch={this.handleBookSearch}
          />
          <h3>Results</h3>
          {this.state.booksData.map(book => (
            <BookResults
              bookTitle={book.volumeInfo.title}
              briefDescription={book.searchInfo.textSnippet}
              author={book.volumeInfo.authors}
              imageURL={book.volumeInfo.imageLinks.thumbnail}
              description={book.volumeInfo.description}
              link={book.volumeInfo.previewLink}
            />
          ))
          }
        </div>
      </div>
    );
  }
}
export default App;
