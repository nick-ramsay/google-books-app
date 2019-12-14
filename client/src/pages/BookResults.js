import React, { Component } from "react";
import API from "../utils/API";
import BookResultsComponent from "../components/BookResults/BookResults";
import BookSearch from "../components/BookSearch/BookSearch";

class BookResults extends Component {

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
                            <BookResultsComponent
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
        )
    }
}

export default BookResults;