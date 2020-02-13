import { createGlobalStyle } from 'styled-components';
import { font, media } from './theme';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  @import url(${font.url});
  @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');

  *, *:before, *:after {
    box-sizing: border-box; 
    /*  content-box (default) 
          -> height is only content, padding is added
        border-box 
          -> height includes padding and content 
    */
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  html {
    font-size: 50%; /* sets the unit 'rem' to (62.5%,10px) (50%, 8px)  */
    ${media.tablet`
      font-size: 57%;
    `}
    ${media.desktopS`
      font-size: 62.5%;
    `}
    overflow-x: hidden;
    max-width: 100vw;
  }

  body {
    color: black;
    font-family: ${font.family};
    font-size: 2rem;
    margin: 0;
    padding: 0;
    background: #f2f1f0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a, button {
    &, &:focus, &:hover, &:active {
      outline: none;
      text-decoration: none;
      color: inherit;
    }
  }

  ul, li {
    list-style: none;
  }

`;

export default GlobalStyle;