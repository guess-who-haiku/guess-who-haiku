import styled, { keyframes } from 'styled-components';
import α from 'color-alpha';

const blurIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`

export const ModalBackground = styled.div`
  animation: ${blurIn} .2s cubic-bezier(.25,.8,.25,1);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${α('#f2f1f0', .9)};
  z-index: 10;
  backdrop-filter: blur(2px);
`;

export const ModalComponentWrapper = styled.div`
  animation: ${blurIn} .3s cubic-bezier(.25,.8,.25,1);
  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;