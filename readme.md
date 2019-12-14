# Google Books Search

Heroku Deployment: https://searching-google-books.herokuapp.com/

## Problem Summary 
- As someone who enjoys reading, I'd like an easy way to find books and keep a list of my favourites.

## Overview
- This is a React application that calls to the Google Books API to allow users to find books of their choosing. Once a list of search results is rendered, a user may save a book to the "Saved" list. When the user selects the Saved link on the navigation bar, they will be taken to the "Saved" component where they can view saved books or remove them from the list if they would prefer.

## Installation & Prerequisites

![Dependent Packages](https://github.com/nick-ramsay/readme-images/blob/master/google-books-search/dependent-packages.jpg?raw=true)

- The Google Books Search application is dependent upon five JavaScript libraries...
 
 1. React
 2. Axios
 3. Mongoose
 4. Express
 5. react-router

 - If you have cloned the repository with the ```package.json``` file, the packages required for React.js can be installed using the npm-install command.

 - The application utilizes the Bootstrap library for formatting and responsiveness and uses MongoDB as it's database solution for saving articles.

## Instructions

To start the Google Books Search application, run the following command: ```npm start```

Google Books Search is deployed on Heroku for usage [here](https://searching-google-books.herokuapp.com/).

When users first log on, they will land on the search page. A user can enter a term for which they'd like to search Google Books and click "Search". After clicking search, ten results from Google Search will be rendered on the page. The user can read through each and click the "View" button to see more details about the book on Google Books. The user may also select the "Save" button, which will save the book to the database where it can then be viewed on the save page.

![Google Books Search](https://github.com/nick-ramsay/readme-images/blob/master/google-books-search/search-page?raw=true)

The user can then navigate to the "Saved" component by clicking "Saved" in the navigation bar at the top of the screen. Once taken to the "Saved" component, the user can view all the books that they've ever saved, reading the same details they first saw or clicking the "View" button to see more details on Google Books. If the user decides that they no longer want to keep a book on the saved page, they may select "Delete" to remove it.

![Google Books Search](https://github.com/nick-ramsay/readme-images/blob/master/google-books-search/saved-page?raw=true)

## Built With
- The Google Books Search application was built using Bootstrap, Axios and React.js, with additional supporting packages including Mongoose and Express.js. The page utilizes a MongoDB database. 

## Authors 
- Developer: Nick Ramsay (@nick-ramsay)
