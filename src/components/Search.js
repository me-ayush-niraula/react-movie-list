import React from "react";
import "./Search.css";

export const Search = (props) => {
  return (
    <div className="container">
      <div className="searchBar">
        <input type="text" onChange={props.changeHandler} />
      </div>
      <div className="row buttonRow">
        <button className="searchButton" onClick={props.renderMovie}>
          <strong>SEARCH</strong>
        </button>
      </div>
    </div>
  );
};
