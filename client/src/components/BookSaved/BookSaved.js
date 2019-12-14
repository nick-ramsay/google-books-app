import React from "react";
import "./style.css";

function BookSaved(props) {
    return (
        <div className="col-md-12 mt-2">
            <div className="card">
                <div className="card-body col-md-12">
                    <div className="row">
                        <div className="col-md-8">
                            {props.volumeInfo && props.volumeInfo.title &&
                                <h5 className="card-title"><strong>{props.volumeInfo.title}</strong></h5>
                            }
                        </div>
                        <div className="col-md-4">
                            {props.volumeInfo && props.volumeInfo.previewLink &&
                                <a className="btn btn-primary m-1 float-right" type="button" target="_blank" href={props.volumeInfo.previewLink}>View</a>
                            }
                            <button className="btn btn-danger m-1 float-right" type="button">Delete</button>
                        </div>
                    </div>
                    {props.volumeInfo && props.volumeInfo.authors &&
                        <p className="card-text">Written by {props.volumeInfo.authors}</p>
                    }
                    <div className="row">
                        <div className="col-md-4">
                            {props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail &&
                                <img src={props.volumeInfo.imageLinks.thumbnail} alt="Book image goes here..." className="img-thumbnail" />
                            }
                        </div>
                        <div className="col-md-8">
                            {props.volumeInfo && props.volumeInfo.description &&
                                <p>{props.volumeInfo.description}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookSaved;
