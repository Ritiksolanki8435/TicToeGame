import React from "react";
import Square from "./Square";
import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaDizzy } from "react-icons/fa";
import "../box.css";
import "../square.css";
import Squares from "./Squares";

const Box = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);
  const [count, setCount] = useState(0);

  const playerDatas = localStorage.getItem("Player");
  const data = JSON.parse(playerDatas);
  const player1 = data[0].name;
  const player2 = data[1].name;

  const isMatchDraw = () => {
    return checkWinner() === false && count === 9;
  };
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // debugger;
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  // const isWinner = checkWinner();
  // console.log("p isWinner", isWinner);

  const handleChange = (index) => {
    if (checkWinner()) return;
    if (isMatchDraw()) return;
    setCount(count + 1);

    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXturn(!isXturn);
  };

  const handleRestart = () => {
    setCount(0);
    setState(Array(9).fill(null));
  };

  console.log(count);
  return (
    <div className="Box_container">
      <h1 className="heading">
        Welcome To The <span className="spann">Tic-Tac-Toe</span>
      </h1>

      {checkWinner() ? (
        <>
          <p className="result_declaretion">
            {checkWinner() === "X" ? player1 : player2}
            {"    "}
            won the Game <FaTrophy className="trophy" />
          </p>
          <Squares
            handleChange={handleChange}
            state={state}
            isWinner={checkWinner()}
          />
          <p className="restarting_notation">
            Click On The Restart To Play Again
          </p>
          <button className="btn" onClick={handleRestart}>
            Restart
          </button>
        </>
      ) : (
        <>
          <Squares
            handleChange={handleChange}
            state={state}
            isWinner={checkWinner()}
          />

          <h2 className="notation">
            {isMatchDraw() ? (
              <>
                <p className="draw">
                  <FaDizzy className="confuse" /> Match Draw{" "}
                  <FaDizzy className="confuse" />
                </p>
                <button className="btn" onClick={handleRestart}>
                  Restart
                </button>
              </>
            ) : (
              <p>{isXturn ? player1 : player2} Please Move</p>
            )}
          </h2>
        </>
      )}
    </div>
  );
};

export default Box;
