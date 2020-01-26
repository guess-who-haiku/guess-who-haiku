import React from 'react'
import { ModalBackground, ModalComponentWrapper } from './Modal.styled';
import SignupModalContainer from 'components/session/SignupModalContainer';
import LoginModalContainer from 'components/session/LoginModalContainer';
const Modal = ({ modal, closeModal, currentUser }) => {
  if (!modal) {
    return null;
  }
  let Component;
  switch (modal) {
    case 'test':
      Component = <h1>This is a test</h1>;
      break;
    case 'signup':
      Component = <SignupModalContainer />;
      break;
    case 'login':
      Component = <LoginModalContainer />;
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