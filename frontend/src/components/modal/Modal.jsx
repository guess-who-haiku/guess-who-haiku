import React from 'react'
import { ModalBackground, ModalComponentWrapper } from './Modal.styled';
import SignupModalContainer from 'components/session/SignupModalContainer';
import LoginModalContainer from 'components/session/LoginModalContainer';
import HaikuShow from 'components/haiku_show/HaikuContainer';
const Modal = ({ modal, closeModal, currentUser, haikuId }) => {
  if (!modal) {
    return null;
  }
  let Component;
  switch (modal.component) {
    case 'test':
      Component = <h1>This is a test</h1>;
      break;
    case 'signup':
      Component = <SignupModalContainer />;
      break;
    case 'login':
      Component = <LoginModalContainer />;
      break;
    case 'haikuShow':
      Component = <HaikuShow />;
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