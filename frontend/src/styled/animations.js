import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const spinReverse = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-720deg); }
`;
