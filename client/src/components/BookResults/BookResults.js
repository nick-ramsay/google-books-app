import React from "react";
import "./style.css";

function BookResults(props) {
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
                                <a className="btn btn-primary m-1 float-right" type="button" target="_blank" rel="noopener noreferrer" href={props.volumeInfo.previewLink}>View</a>
                            }
                            <button className="btn btn-success m-1 float-right" type="button" id={props.bookIndex} onClick={props.saveBook}>Save</button>
                        </div>
                    </div>
                    {props.volumeInfo && props.volumeInfo.authors &&
                        <p className="card-text">Written by {props.volumeInfo.authors}</p>
                    }
                    <div className="row">
                        <div className="col-md-4">
                            {props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail &&
                                <img src={props.volumeInfo.imageLinks.thumbnail} alt={props.volumeInfo.title} className="img-thumbnail" />
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

export default BookResults;
