import ReactModal from "react-modal";
import { BsXLg } from "react-icons/bs";
import "./style.css";
import React, { useState } from "react";
import ModalGamesForm from "components/ModalGamesForm";
import ModalUsersForm from "components/ModalUsersForm";

interface modalProps {
  isOpen: boolean;
  closeModal: any;
  onChange: any;
}

const Modal = ({ isOpen, closeModal }: modalProps) => {
  const [mode, setMode] = useState("Games");

  const changeFormMode = () => {
    if (mode == "Games") {
      setMode("Users");
    } else {
      setMode("Games");
    }
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        className="react-default-modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <h1 className="modal-title">
            GERENCIAMENTO
            <button
              type="button"
              onClick={closeModal}
              className="close-modal-button"
            >
              <BsXLg className="close-modal-icon"></BsXLg>
            </button>
          </h1>
          <div className="form-mode-button-container">
            <button className={`form-mode-button ${mode}`} onClick={changeFormMode}>
              {mode}
            </button>
          </div>
          {mode=="Games"?<ModalGamesForm/> : <ModalUsersForm/>}
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
