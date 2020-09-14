import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
import { mediaQueries } from "./styles/breakpoints"

const NavBar = styled.nav`
  font-family: ${props => props.theme.displayFont};
  font-size: 1.5rem;
  background-color: ${props => props.theme.mainWrapperColor};
  width: 100vw;
  max-width: 1200px;
  padding: 1rem 0;
  margin: 3rem auto 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  ${mediaQueries("md")`
    font-size:2rem;
  `}
`

const StyledNavLink = styled.a`
  flex-shrink: 1;
  text-decoration: none;
  color: ${props => props.theme.displayColor};
  &:hover {
    color: darkslategray;
  }
`

const NavLinks = styled.ul`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  flex-shrink: 1;
`

const Nav = () => {
  return (
    <>
      <Logo href="/" />
      <NavBar>
        <NavLinks>
          <StyledNavLink href="/">Home</StyledNavLink>
          <StyledNavLink href="/reviews">Reviews</StyledNavLink>
          <StyledNavLink href="/merch">Merch</StyledNavLink>
          <StyledNavLink href="/contact">Contact</StyledNavLink>
        </NavLinks>
      </NavBar>
    </>
  )
}

export default Nav
