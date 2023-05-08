import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .body {
    background: hsl(218, 23%, 16%);
    display: flex;
    font-family: 'Manrope', sans-serif;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100%;
  }
`;

export default GlobalStyle;
