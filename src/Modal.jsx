import React from "react";
import ConnectModal from "./components/ConnectModal";
import SettingModal from "./components/SettingModal";

function Modal({ modal, setModalOpen, setIsActive }) {
  if (modal === "setting") {
    return <SettingModal setModalOpen={setModalOpen} />;
  }
  if (modal === "start") {
    return <ConnectModal setModalOpen={setModalOpen} />;
  }
}

export default Modal;
