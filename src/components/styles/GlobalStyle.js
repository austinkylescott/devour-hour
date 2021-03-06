import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.pageBackgroundColor};
    font-family: ${props => props.theme.primaryFont};
  }

  html {
    visibility: visible;
    opacity:1;
  }

`

export default GlobalStyle
