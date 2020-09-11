import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "../components/theme"

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

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        Nav
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}
