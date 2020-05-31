import React from "react"
import styled from "styled-components"
import Hero, { StyledLink } from "../components/Hero"
import colors from "../config/color"

export const HomeHeader = styled.h2`
  text-align: center;
  margin: 24px 0;
`
export const ContentWrapper = styled.p`
  margin: 40px auto;
  font-size: 1.618em;
`

export const SubHeaderWrapper = styled.div`
  max-width: 965px;
  margin: 0 auto;
  padding: 60px;
`

export const WhatCanIDo = styled.div`
  padding: 60px;
  background-color: ${colors.dark};

  h3 {
    color: ${colors.light};
  }
`

const HomePage = (props) => {
  return (
    <div className="homepage-page">
      <Hero />
      <SubHeaderWrapper>
        <HomeHeader>Let's work together</HomeHeader>
        <ContentWrapper>
          No Food Left Behind will help you make food choices that will do less
          harm to the environment, eliminate waste, and help people in need.
        </ContentWrapper>
        <StyledLink to="/mission">Learn More</StyledLink>
      </SubHeaderWrapper>
      <WhatCanIDo>
        <h3>What can I do?</h3>
      </WhatCanIDo>
    </div>
  )
}

export default HomePage
