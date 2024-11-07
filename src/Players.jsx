import React from "react";

import Icon from "./assets/icon.png";
import Av1 from "./assets/avatar/av1.jpg";
import QuestionMark from "./assets/avatar/question-mark.png";
import { FiMenu } from "react-icons/fi";
import { useBallContext } from "./context";

function Players({ setModal, data }) {
  const { activeImage } = useBallContext();
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
          <p className="p-name">{data.name}</p>
          <p className="price">{data.money}</p>
        </span>
        <span className="a-box">
          <img src={Av1} height="100%" alt="" />
        </span>
      </div>
      <div className="player-2">
        <span className="a-box">
          <img src={activeImage ?? QuestionMark} height="100%" alt="" />
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
