import React from "react";
import "./style.css";

function BookSaved(props) {
    return (
        <div className="col-md-12 mt-2">
            <div className="card">
                <div className="card-body col-md-12">
                    <div className="row">
                        <div className="col-md-8">
                            {props.title &&
                                <h5 className="card-title"><strong>{props.title}</strong></h5>
                            }
                        </div>
                        <div className="col-md-4">
                            {props.link &&
                                <a className="btn btn-primary m-1 float-right" type="button" target="_blank" rel="noopener noreferrer" href={props.link}>View</a>
                            }
                            <button className="btn btn-danger m-1 float-right" id={props.bookID} onClick={props.deleteBook} type="button">Delete</button>
                        </div>
                    </div>
                    {props.author &&
                        <p className="card-text">Written by {props.author.map((author, index) => {
                            if (index === 0) {
                                return author
                            } else {
                                return ", " + author
                            }
                        })}</p>
                    }
                    <div className="row">
                        <div className="col-md-4">
                            {props.imageURL &&
                                <img src={props.imageURL} alt={props.title} className="img-thumbnail" />
                            }
                        </div>
                        <div className="col-md-8">
                            {props.description &&
                                <p>{props.description}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookSaved;
