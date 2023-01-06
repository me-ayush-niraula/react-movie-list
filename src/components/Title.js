import React from "react";
import "./Title.css";

export const Title = () => {
  return (
    <div className="mainTitle">
      <h2>My-Movie-List</h2>
      <p>A react movie app created to simply view movie and their realeted information which is fetched from the OMDb API. I created this basic movie viewing platform to gets my hands into working with simple APIs and rendering it on the screen.</p>
      <p>
        Created by : <span className="specialText">Ayush Niraula</span>
      </p>
    </div>
  );
};
