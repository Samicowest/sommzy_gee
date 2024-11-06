import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import { HiSpeakerWave } from "react-icons/hi2";

import { MdClose } from "react-icons/md";
import { data } from "../data";
import { useBallContext } from "../context";

function SettingModal({ setModalOpen }) {
  const { setIsActive, activeImage, toggleAudio, isPlaying } = useBallContext();
  const changeUser = (dat) => {
    setIsActive(dat);
  };

  const data1 = data.filter((dat) => dat.key !== 9);

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
          {data1.map((dat) => {
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
        <p id="stop" onClick={toggleAudio}>
          {isPlaying ? <HiMiniSpeakerXMark /> : <HiSpeakerWave />}
          {isPlaying ? "Mute " : "Music"}
        </p>
      </div>
    </div>
  );
}

export default SettingModal;
