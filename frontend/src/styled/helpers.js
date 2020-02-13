import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const colorsToLinearGradient = (arr = ['#D8D8D8', '#C8C8C8', '#D8D8D8', '#C8C8C8', '#D8D8D8']) => {
  if (arr.length === 1) arr.push(arr[0]);

  return (
    `linear-gradient(to bottom, ${arr.join(', ')})`
  )
};