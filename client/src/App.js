import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import BookResultsPage from "./pages/BookResults";
import BookSavedPage from "./pages/BookSaved";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={BookResultsPage} />
            <Route exact path="/saved" component={BookSavedPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
