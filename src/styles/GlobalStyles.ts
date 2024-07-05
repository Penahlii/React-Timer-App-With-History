import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    margin-top: 20px; 
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
`;

export default GlobalStyles;
