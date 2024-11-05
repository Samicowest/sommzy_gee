import React from "react";
import { MdClose } from "react-icons/md";

function ConnectModal({ setModalOpen }) {
  return (
    <div className="connect-modal">
      <h3 style={{ backgroundColor: "transparent !important" }}>
        <a className="close-modal" onClick={() => setModalOpen(false)}>
          <MdClose />
        </a>
      </h3>
      <div>
        <form>
          <span>
            <label htmlFor="name">Enter your name</label>
            <input type="text" />
          </span>
          <span>
            <label htmlFor="amount">Amount to stake $</label>
            <input type="number" />
          </span>
          <button type="button">Start</button>
        </form>
      </div>
    </div>
  );
}

export default ConnectModal;
