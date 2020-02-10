import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const colorsToLinearGradient = (arr = ['#fff', '#000']) => `linear-gradient(to bottom, ${arr.join(', ')})`;