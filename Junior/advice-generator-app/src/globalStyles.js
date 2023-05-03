import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    align-items: center;
    background: hsl(218, 23%, 16%);
    color: hsl(193, 38%, 86%);
    display: flex;
    font-family: 'Manrope';
    font-weight: 800;
    justify-content: center;
  }  
`

export default GlobalStyle;