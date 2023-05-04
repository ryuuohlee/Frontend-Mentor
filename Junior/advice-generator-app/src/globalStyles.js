import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .body {
    background: hsl(218, 23%, 16%);
    display: flex;
    height: 100vw;
    justify-content: center;
    position: relative;
    width: 100%;
  }
`;

export default GlobalStyle;
