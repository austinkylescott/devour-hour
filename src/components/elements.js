import styled from "styled-components"
import { mediaQueries } from "./styles/breakpoints"

export const StyledH1 = styled.h1`
  font-family: ${props => props.theme.displayFont};
  font-size: 3rem;
  padding: 2rem 0;
`

export const StyledH2 = styled.h2`
  font-family: ${props => props.theme.displayFont};
  font-size: 2rem;
  margin-bottom: 1rem;
  ${mediaQueries("md")`
    padding: 0 2rem 0;
  `}
`

export const StyledH3 = styled.h3`
  font-family: ${props => props.theme.displayFont};
  font-size: 1.1rem;
  ${mediaQueries("md")`
    padding: 0 2rem 0;
  `}
`
