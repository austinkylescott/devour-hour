import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import theme from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"
import PageWrapper from "../PageWrapper"

import Nav from "../Nav"

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>Chan's Devour Hour</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lacquer&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <PageWrapper>{children}</PageWrapper>
      </ThemeProvider>
    </React.Fragment>
  )
}
