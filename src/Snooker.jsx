import Board from "./Board";
import Players from "./Players";
import React, { useState } from "react";
import Modal from "./Modal";

function Snooker() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState("setting");

  const handleOpen = (value) => {
    console.log("clicked open");
    console.log(value); // Corrected typo here
    setModalOpen(true);
    setModal(value);
  };

  return (
    <section className="wrapper">
      {modalOpen && (
        <div className="modal-wrapper">
          <Modal modal={modal} setModalOpen={setModalOpen} />
        </div>
      )}
      <div className="container">
        <Players setModal={handleOpen} />
        <Board setModal={handleOpen} />
      </div>
    </section>
  );
}

export default Snooker;
