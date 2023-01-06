import React from "react";
import "./Moviebanner.css";
export const Moviebanner = (props) => {
  return (
    <div className="container movieBanner">
      <div className="lol">
        <div className="ayush">
          {props.movieName}
          <br />
          <strong className="special">{props.movieType}</strong>
          <br />
          <img src={props.moviePoster} alt="" />
          <br />
          {props.movieYear}
        </div>
      </div>
    </div>
  );
};
