import Board from "./Board";
import Loading from "./Loading";
import Players from "./Players";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useBallContext } from "./context";
import Audio from "./assets/audio.mp3";
function Snooker() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState("setting");
  const [isActive, setIsActive] = useState(1);
  const { audioRef } = useBallContext();
  const handleOpen = (value) => {
    console.log("clicked open");
    console.log(value); // Corrected typo here
    setModalOpen(true);
    setModal(value);
  };

 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="wrapper">
      {modalOpen && (
        <div className="modal-wrapper">
          <Modal
            modal={modal}
            setModalOpen={setModalOpen}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </div>
      )}
      <div className="container">
        <audio ref={audioRef} src={Audio} preload="auto" />
        <Players setModal={handleOpen} />
        <Board setModal={handleOpen} />
      </div>
    </section>
  );
}

export default Snooker;
