import React from "react";
import Square from "./Square";

const Squares = ({ handleChange, state, isWinner }) => {
  console.log("isWinner", isWinner);
  return (
    <>
      <div className="border_row">
        <Square value={state[0]} onClick={() => handleChange(0)} />
        <Square value={state[1]} onClick={() => handleChange(1)} />
        <Square value={state[2]} onClick={() => handleChange(2)} />
      </div>
      <div className="border_row">
        <Square value={state[3]} onClick={() => handleChange(3)} />
        <Square value={state[4]} onClick={() => handleChange(4)} />
        <Square value={state[5]} onClick={() => handleChange(5)} />
      </div>
      <div className="border_row">
        <Square value={state[6]} onClick={() => handleChange(6)} />
        <Square value={state[7]} onClick={() => handleChange(7)} />
        <Square value={state[8]} onClick={() => handleChange(8)} />
      </div>
    </>
  );
};

export default Squares;
