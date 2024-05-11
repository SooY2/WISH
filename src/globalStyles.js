import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts/Font.css';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --vh: 100vh;
  }

  *{
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'KCC-Jeongbeom';
  }
`;

export default GlobalStyles;
