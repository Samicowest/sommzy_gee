import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

import av1 from "../assets/avatar/av1.jpg";
import av3 from "../assets/avatar/av3.jpg";
import av5 from "../assets/avatar/av5.jpg";
import av6 from "../assets/avatar/av6.jpg";
import av7 from "../assets/avatar/av7.jpg";
import av8 from "../assets/avatar/av8.jpg";

const data = [
  { image: av1, key: 1 },
  { image: av3, key: 3 },
  { image: av5, key: 5 },
  { image: av6, key: 6 },
  { image: av7, key: 7 },
  { image: av8, key: 8 },
];

import { MdClose } from "react-icons/md";

function SettingModal({ setModalOpen }) {
  const [isActive, setIsActive] = useState(1);

  const activeImage = data.find((item) => item.key === isActive)?.image;

  const changeUser = (dat) => {
    setIsActive(dat);
  };

  return (
    <div className="setting-modal">
      <h3 style={{ backgroundColor: "transparent !important" }}>
        <a className="close-modal" onClick={() => setModalOpen(false)}>
          <MdClose />
        </a>
      </h3>
      <div className="av-setting">
        <span className="d-av">
          <img src={activeImage} alt="" />
        </span>
        <ul className="d-option">
          {data.map((dat) => {
            return (
              <li key={dat.key} onClick={() => changeUser(dat.key)}>
                <img src={dat.image} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <br />
      <div className="options">
        <p id="stop">
          <FaCheck />
          Music
        </p>
        <p>
          <FaCheck />
          Sound
        </p>
      </div>
    </div>
  );
}

export default SettingModal;
