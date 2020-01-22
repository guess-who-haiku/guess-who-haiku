import { createGlobalStyle } from 'styled-components';
// CSS RESET: 
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
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
  }

  html {
    font-size: 62.5%; /* sets the unit 'rem' to 10px  */
  }

  body {
    color: black;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;