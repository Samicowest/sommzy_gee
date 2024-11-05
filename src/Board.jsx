import React from "react";

import Board1 from "./assets/8-ball-logo.png";
import Board2 from "./assets/board.png";

function Board({ setModal }) {
  return (
    <div className="board">
      <img src={Board2} className="board-m" width="100%" alt="" />
      <div className="start">
        <img src={Board1} width="80px" alt="" className="logo" />
        <span
          className="n-start"
          onClick={() => {
            console.log("you clicked me");
            setModal("start");
          }}
        >
          Start
        </span>
      </div>
    </div>
  );
}

export default Board;
