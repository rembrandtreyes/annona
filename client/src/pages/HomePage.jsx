import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Hero, { StyledLink } from "../components/Hero"
import color from "../config/color"

export const HomeHeader = styled.h2`
  text-align: center;
  margin: 24px 0;
`
export const ContentWrapper = styled.p`
  margin: 40px auto;
  font-size: 1.618em;

  span {
    color: ${color.logo};
  }
`

export const SubHeaderWrapper = styled.div`
  max-width: 965px;
  margin: 0 auto 60px;
`

export const SectionWrapper = styled.div`
  background-color: ${color.dark};
  min-height: 500px;
  padding: 60px 0;

  display: flex;

  h3 {
    color: ${color.light};
  }
`

export const SectionContainer = styled.div`
  max-width: 965px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  h3 {
    margin-bottom: 32px;
    text-align: center;
  }
`

export const LearnMoreLink = styled(StyledLink)`
  display: block;
  margin: 32px 0;
  width: fit-content;
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(
      to bottom,
      rgba(49, 60, 64, 0) 0%,
      rgba(49, 60, 64, 0.25) 50%,
      rgba(49, 60, 64, 0.85) 100%
    ),
    ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center right;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 24px;

  span {
    padding: 24px;
    font-size: 2.618em;
    color: ${color.light};
    font-weight: 600;
  }
`

export const HelpWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const HelpLink = styled(Link)`
  text-decoration: none;
`

const HomePage = (props) => {
  return (
    <div className="homepage-page">
      <Hero />
      <SubHeaderWrapper>
        <HomeHeader>Let's work together</HomeHeader>
        <ContentWrapper>
          <span>annona</span> will help you make food choices that will do less
          harm to the environment, eliminate waste, and help people in need.
        </ContentWrapper>
        <LearnMoreLink to="/mission">Learn More</LearnMoreLink>
      </SubHeaderWrapper>
      <SectionWrapper>
        <SectionContainer>
          <h3>What can I do?</h3>
          <HelpWrapper>
            <HelpLink to="/donors">
              <ImageContainer imageUrl="https://res.cloudinary.com/dfxj5hpgc/image/upload/v1590953228/food-donations-960x640_b6yri1.jpg">
                <span>Donate</span>
              </ImageContainer>
            </HelpLink>
            <HelpLink to="/distributors">
              <ImageContainer imageUrl="https://res.cloudinary.com/dfxj5hpgc/image/upload/v1590987454/sharon-mccutcheon-ZQI6N_jaM_I-unsplash_ojn5jc.jpg">
                <span>Distribute</span>
              </ImageContainer>
            </HelpLink>
          </HelpWrapper>
        </SectionContainer>
      </SectionWrapper>
    </div>
  )
}

export default HomePage
