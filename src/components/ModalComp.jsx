import React from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function ModalComp({ modalIsOpen, setIsOpen }) {
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <motion.div className="absolute">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="h-[100vh] w-[100vw]">
          <div className="bg-red-500 h-full w-1/2">Right Side</div>
          <div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </div>
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </motion.div>
  );
}

export default ModalComp;
