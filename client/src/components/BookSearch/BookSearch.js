import React from "react";
import "./style.css";

function BookSearch(props) {
    return (

        <div className="col-md-12">
            <form>
                <div className="form-group">
                    <input name="bookSearch" type="text" className="formControl" id="bookSearchInput" style={{width: "100%"}} placeholder="Enter your search term here..." onChange={props.handleSearchChange}></input>
                    <button className="btn btn-dark float-right mt-1" type="button" id="bootSearchBtn" onClick={props.handleBookSearch}>Search</button>
                </div>
            </form>
        </div>
    );
}

export default BookSearch;
