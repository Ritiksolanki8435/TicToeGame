import React from "react";
import "../square.css";

const Square = (props) => {
  return (
    <>
      <div
        className="square"
        onClick={props.onClick}
        style={{
          border: ".5px solid",

          height: "100px",
          width: "100px",
          padding: "40px",
        }}
      >
        <h1>{props.value}</h1>
      </div>
    </>
  );
};

export default Square;
