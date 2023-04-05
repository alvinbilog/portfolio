import React from "react";
import "../../scss/Cover.css";
import Jump from "react-reveal/Jump";
const Cover = () => {
  return (
    <Jump>
      <div className="Cover">
        <div className="image">
          <h1>PORTFOLIO</h1>
          <img src="./alvin.png" alt="" />
        </div>
      </div>
    </Jump>
  );
};

export default Cover;
