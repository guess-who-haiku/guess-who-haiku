import React from 'react'
import { ModalBackground, ModalComponentWrapper } from './Modal.styled';

const Modal = ({ modal, closeModal, currentUser }) => {
  if (!modal) {
    return null;
  }
  let Component;
  switch (modal) {
    case 'test':
      Component = <h1>This is a test</h1>;
      break;

    default:
      return null;
  }
  return (
    <ModalBackground onClick={closeModal}>
      <ModalComponentWrapper onClick={e => e.stopPropagation()}>
        {Component}
      </ModalComponentWrapper>
    </ModalBackground>
  );
};

export default Modal;