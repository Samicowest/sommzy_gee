import React from "react";

import Icon from "./assets/icon.png";
import Av1 from "./assets/avatar/av1.jpg";
import QuestionMark from "./assets/avatar/question-mark.png";
import { FiMenu } from "react-icons/fi";

function Players({ setModal }) {
  return (
    <div className="users">
      <div
        className="menu open-setting"
        onClick={() => {
          console.log("menu clicked");
          setModal("setting");
        }}
      >
        <FiMenu />
      </div>
      <div className="icon">
        <img src={Icon} width="50px" alt="" className="" />
      </div>
      <div className="player-1">
        <span className="info">
          <p className="p-name">Player 1</p>
          <p className="price">$1000</p>
        </span>
        <span className="a-box">
          <img src={Av1} height="100%" alt="" />
        </span>
      </div>
      <div className="player-2">
        <span className="a-box">
          <img src={QuestionMark} height="100%" alt="" />
        </span>
        <span className="info">
          <p className="p-name">You</p>
          <p className="price">$</p>
        </span>
      </div>
    </div>
  );
}

export default Players;
