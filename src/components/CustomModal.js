import React from 'react';
import Modal from 'react-modal';
import '../styles/modal.css';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const CustomModal = ({ isOpen, text, closeModal }) => {
  return (
    <Modal isOpen={isOpen} style={modalStyles}>
      <p>{text}</p>
      <button onClick={closeModal} className="modalCloseBtn">
        확인
      </button>
    </Modal>
  );
};

export default CustomModal;
