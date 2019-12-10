import React from "react";
import "./style.css";

function BookSearch(props) {
    return (

        <div className="col-md-12">
            <form>
                <h3>Book Search</h3>
                <p>Book</p>
                <div className="form-group">
                    <input type="text" className="formControl" id="bookSearchInput" style={{width: "100%"}} placeholder="Enter your search term here..."></input>
                    <button className="btn btn-dark float-right mt-1" id="bootSearchBtn">Search</button>
                </div>
            </form>
        </div>
    );
}

export default BookSearch;
