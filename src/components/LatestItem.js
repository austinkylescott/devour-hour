import React from "react"
import styled from "styled-components"
import { mediaQueries } from "./styles/breakpoints"
import { StyledH1, StyledH2, StyledH3 } from "./elements"

const PreviewWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaQueries("md")`
    flex-direction: row;
    align-items: flex-start;
  `}
`

const PreviewDisplay = styled.img`
  height: 300px;
  width: 400px;
  margin-bottom: 1rem;

  ${mediaQueries("md")`
    height: 300px;
    width: 400px;
  `}
`

const PreviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
`

const PreviewTeaser = styled.p`
  padding: 1rem 0;
  ${mediaQueries("md")`

    padding: 2rem;
    font-size:1.2rem;
  `}
`

const ReadMoreLink = styled.p`
  font-family: ${props => props.theme.displayFont};
  text-decoration: underline;
  text-align: right;

  ${mediaQueries("md")`
    padding: 2rem;
    font-size:1.2rem;
`}
`

const LatestItem = () => {
  return (
    <>
      <StyledH1>Latest Video</StyledH1>
      <PreviewWrapper>
        <PreviewDisplay
          src="https://via.placeholder.com/300x200"
          alt="latest item placeholder"
        />
        <PreviewTextContainer>
          <StyledH2>Lemme tell you about dis chicken...</StyledH2>
          <StyledH3>Date Posted: 9/15/20</StyledH3>
          <PreviewTeaser>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ad
            voluptatem autem architecto ea placeat, animi repellat. Voluptate
            iste voluptatibus praesentium officiis ea. Vel pariatur eligendi
            vero, inventore ducimus expedita cupiditate perferendis voluptatibus
            asperiores, repellendus molestiae consequatur blanditiis suscipit
            adipisci error assumenda ipsam eum at. Eum error dolorum sequi et.
          </PreviewTeaser>
          <ReadMoreLink>Read more...</ReadMoreLink>
        </PreviewTextContainer>
      </PreviewWrapper>
    </>
  )
}

export default LatestItem
