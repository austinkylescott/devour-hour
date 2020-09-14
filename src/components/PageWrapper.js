import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem 2rem;
  background-color: ${props => props.theme.mainWrapperColor};
  width: 100vw;
  max-width: 1200px;
`

const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default PageWrapper
