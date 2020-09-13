import React from "react"
import styled from "styled-components"

const LogoWrapper = styled.div`
  text-align: center;
  vertical-align: middle;
`

// Logo Inspiration from https://codepen.io/Trinca/pen/NAvpWa
const StyledLogo = styled.div`
  margin: 2rem;
  font-family: ${props => props.theme.displayFont};
  color: #fed128;
  font-size: 4rem;
  line-height: 4rem;
  text-shadow: 0 0 3vw #806914;

  animation: neon 2s ease infinite;
  -moz-animation: neon 2s ease infinite;
  -webkit-animation: neon 2s ease infinite;

  @keyframes neon {
    0%,
    100% {
      text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #fa1c16,
        0 0 10vw #fa1c16, 0 0 0.4vw #fed128, 0.5vw 0.5vw 0.1vw #806914;
      color: #fed128;
    }
    25% {
      text-shadow: 0 0 0.5vw #800e0b, 0 0 1.5vw #800e0b, 0 0 5vw #800e0b,
        0 0 5vw #800e0b, 0 0 0.2vw #800e0b, 0.5vw 0.5vw 0.1vw #40340a;
      color: #806914;
    }
  }
`

const Logo = () => {
  return (
    <LogoWrapper>
      <StyledLogo>Chan's</StyledLogo>
      <StyledLogo>Devour Hour</StyledLogo>
    </LogoWrapper>
  )
}

export default Logo
