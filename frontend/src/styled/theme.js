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
// const lavendarPurple = '#9277B2';
// const hotCinnamon = '#e05624';
const candleLight = '#f9cc10';
// const forestGreen = '#1d8941';

export const colors = {
  primaryDark: toryBlue,
  primary: bostonBlue,
  primaryLight: havelockBlue,
  utilityYellow: candleLight,
  utilityPink: cabaret,
  utilityRed: '#EB5757',
  utilityGreen: '#27AE60'
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
  family: "'Martel Sans', sans-serif",
  url: 'https://fonts.googleapis.com/css?family=Martel+Sans:300,400,600,700,800,900|Molle:400i&display=swap',
}

// ---------------------- Box Shadows
export const boxShadows = {
  still: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', hover: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
}

const theme = {
  boxShadows,
  colors,
  font
}

export default theme;