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
                                title={book.title}
                                author={book.author}
                                link={book.link}
                                imageURL={book.imageURL}
                                description={book.description}
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