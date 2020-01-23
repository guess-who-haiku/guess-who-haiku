import { css } from 'styled-components'

// media query helper
const breakpoints = {
  desktopL: { px: 1000 },
  desktopS: { px: 900 },
  tablet: { px: 768 },
  mobileL: { px: 600 }
}
export const media = Object.keys(breakpoints).reduce((acc, bp) => {
  const { px } = breakpoints[bp];
  acc[bp] = (...args) => css`
    @media (min-width: ${px}px) {
        ${css(...args)};
    }
  `;

  return acc;
}, {})


// ---------------------- Colors
const toryBlue = '#155cac';
const bostonBlue = '#418bc8';
const havelockBlue = '#66a8dc';
const cabaret = '#d8526a';
const lavendarPurple = '#9277B2';
const hotCinnamon = '#e05624';
const candleLight = '#f9cc10';
const forestGreen = '#1d8941';

export const colors = {
  primaryDark: toryBlue,
  primary: bostonBlue,
  primaryLight: havelockBlue,
  utilityYellow: candleLight,
  utilityPink: cabaret,
}
// ---------------------- Font
const fontWeights = {
  regular: 400,
  bold: 700,
  extraBold: 800
}

export const font = {
  sizes: [],
  weights: fontWeights,
  family: "'Merriweather Sans', sans-serif",
  url: 'https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700,800&display=swap',
}

const theme = {
  colors,
  font
}

export default theme;