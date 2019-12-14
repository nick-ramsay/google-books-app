import React, { Component } from "react";
import API from "../utils/API";
import BookSavedComponent from "../components/BookSaved/BookSaved";

class BookSaved extends Component {

    state = {
        savedBooksData: []
    }

    componentDidMount() {
        this.renderSavedBooks();
    }

    deleteBook = event => {
        event.preventDefault();
        var bookClicked = event.target.id;
        console.log(bookClicked);
       
        API.deleteBook(bookClicked).then(res => this.renderSavedBooks()).catch(err => console.log(err));
        console.log("Clicked delete book!");
    }
    /*
    deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };*/

    renderSavedBooks = () => {
        API.getSavedBooks().then(res =>this.setState({ savedBooksData: res.data })).catch(err => console.log(err));
        console.log(this.state.savedBooksData)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <row>
                        <h3><strong>Saved Books</strong></h3>
                        {this.state.savedBooksData.map(book => (
                            <BookSavedComponent
                                bookID={book._id}
                                title={book.title}
                                author={book.author}
                                link={book.link}
                                imageURL={book.imageURL}
                                description={book.description}
                                deleteBook={this.deleteBook}
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

export default BookSaved;