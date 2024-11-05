import React from "react";
import av1 from "./assets/avatar/av1.jpg";
import av2 from "./assets/avatar/av2.jpg";
import av3 from "./assets/avatar/av3.jpg";
import av4 from "./assets/avatar/av4.jpg";
import av5 from "./assets/avatar/av5.jpg";
import av6 from "./assets/avatar/av6.jpg";
import av7 from "./assets/avatar/av7.jpg";
import av8 from "./assets/avatar/av8.jpg";
import ConnectModal from "./components/ConnectModal";
import ManualModal from "./components/manualModal";
import SettingModal from "./components/SettingModal";

function Modal({ modal, setModalOpen }) {
  if (modal === "setting") {
    return <SettingModal setModalOpen={setModalOpen} />;
  }
  if (modal === "start") {
    return <ConnectModal setModalOpen={setModalOpen} />;
  }
}

export default Modal;
