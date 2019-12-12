import React from "react";
import "./style.css";

function BookResults(props) {
    return (
        <div className="col-md-12 mt-2">
            <div class="card">
                <div class="card-body col-md-12">
                    <div className="row">
                        <div className="col-md-8">
                            {props.volumeInfo && props.volumeInfo.title &&
                                <h5 class="card-title"><strong>{props.volumeInfo.title}</strong></h5>
                            }
                        </div>
                        <div className="col-md-4">
                            {props.volumeInfo && props.volumeInfo.previewLink &&
                                <a className="btn btn-primary m-1 float-right" type="button" target="_blank" href={props.volumeInfo.previewLink}>View</a>
                            }
                            <button className="btn btn-success m-1 float-right" type="button">Save</button>
                        </div>
                    </div>
                    {props.volumeInfo && props.volumeInfo.authors &&
                        <p class="card-text">Written by {props.volumeInfo.authors}</p>
                    }
                    <div className="row">
                        <div className="col-md-4">
                            {props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail &&
                                <img src={props.volumeInfo.imageLinks.thumbnail} alt="Book image goes here..." class="img-thumbnail" />
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
