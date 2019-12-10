import React from "react";
import "./style.css";

function BookResults(props) {
    return (
        <div className="col-md-12 mt-2">
            <h3>Results</h3>
            <div class="card">
                <div class="card-body col-md-12">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 class="card-title">Book Title</h5>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary m-1 float-right">View</button>
                            <button className="btn btn-success m-1 float-right">Save</button>
                        </div>
                    </div>
                    <p class="card-text">A short description of the books...</p>
                    <p class="card-text">Written By Author Name</p>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="..." alt="Book image goes here..." class="img-thumbnail" />
                        </div>
                        <div className="col-md-8">
                            <p>
                                Long book review... 
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookResults;
