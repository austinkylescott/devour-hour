import React from "react"

import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"

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
