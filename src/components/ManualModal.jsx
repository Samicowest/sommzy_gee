import React from "react";

function ManualModal({ setModalOpen }) {
  return (
    <div className="manual-modal">
      <h3>
        <a className="close-modal" onClick={() => setModalOpen(false)}>
          <i className="fa fa-close"></i>
        </a>
        <p>How to play 8 ball</p>
      </h3>
      <strong>Game Manual is coming soon.</strong>
    </div>
  );
}

export default ManualModal;
