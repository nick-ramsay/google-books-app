import React from "react";
import "./style.css";

function BookResults(props) {
    return (
        <div className="col-md-12 mt-2">
            <div class="card">
                <div class="card-body col-md-12">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 class="card-title">{props.bookTitle}</h5>
                        </div>
                        <div className="col-md-4">
                            <a className="btn btn-primary m-1 float-right" type="button" target="_blank" href={props.link}>View</a>
                            <button className="btn btn-success m-1 float-right" type="button">Save</button>
                        </div>
                    </div>
                    <p class="card-text">Written by {props.author}</p>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={props.imageURL} alt="Book image goes here..." class="img-thumbnail" />
                        </div>
                        <div className="col-md-8">
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookResults;
