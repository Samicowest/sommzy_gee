import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

import { MdClose } from "react-icons/md";
import { data } from "../data";

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
