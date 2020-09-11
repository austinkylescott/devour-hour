import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('${props => props.theme.fontSource}');

  html, body{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background-color:${props => props.theme.backgroundColor};
    font-family: ${props => props.theme.primaryFont};
  }
`

export default GlobalStyle
