import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Google Books</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#">Search</a>
            <a class="nav-item nav-link" href="#">Saved</a>
          </div>
        </div>
      </nav>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Google Books Search</h1>
          <p class="lead">Search for books that are available on <a href="https://books.google.com/">Google Books</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
