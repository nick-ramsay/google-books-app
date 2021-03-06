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

    handleBookSearch = () => {
        API.getBookResults(this.state.bookSearch).then(res => (res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] }))
    }

    saveBook = event => {
        var bookClicked = event.target.id;
        event.preventDefault();
        var savedBookData = {
            title: this.state.booksData[bookClicked].volumeInfo.title,
            author: this.state.booksData[bookClicked].volumeInfo.authors,
            link: this.state.booksData[bookClicked].volumeInfo.previewLink,
            imageURL: this.state.booksData[bookClicked].volumeInfo.imageLinks.thumbnail,
            description: this.state.booksData[bookClicked].volumeInfo.description
        }

        var currentBooksData = this.state.booksData;
        currentBooksData.splice(bookClicked, 1);

        API.saveBook(savedBookData).then(res => this.setState({ booksData: currentBooksData })).catch(err => console.log(err));;
    }

    render() {
        var currentBooksData = this.state.booksData;
        if (currentBooksData.length !== 0) {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <h4><strong>Search for Books</strong></h4>
                            <BookSearch
                                handleSearchChange={this.handleSearchChange}
                                handleBookSearch={this.handleBookSearch}
                            />
                        </div>
                        <div className="row">
                            <h3><strong>Results</strong></h3>
                            {this.state.booksData.map((book, index) => (
                                <BookResultsComponent
                                    volumeInfo={book.volumeInfo}
                                    searchInfo={book.searchInfo}
                                    saveBook={this.saveBook}
                                    bookIndex={index}
                                    key={index}
                                />
                            ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h4><strong>Search for Books</strong></h4>
                        <BookSearch
                            handleSearchChange={this.handleSearchChange}
                            handleBookSearch={this.handleBookSearch}
                        />
                    </div>
                    <div className="row">
                        <h3><strong>Results</strong></h3>
                    </div>
                    <div className="row">
                        <p>No search results</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookResults;