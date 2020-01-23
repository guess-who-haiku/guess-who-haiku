import styled from 'styled-components';
import α from 'color-alpha';
import theme from 'styled/theme';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${α(theme.colors.primary, .95)};
  z-index: 10;
`;

export const ModalComponentWrapper = styled.div`
  z-index: 50;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;