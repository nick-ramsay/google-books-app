import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import BookResultsPage from "./pages/BookResults";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import BookSearch from "./components/BookSearch/BookSearch";
import BookResultsComponent from "./components/BookResults/BookResults";
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
      <Router>
        <div>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={BookResultsPage} />
            <Route exact path="/saved" component={BookResultsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
