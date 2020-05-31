import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Hero = (props) => {
  return (
    <HeroContainer>
      <OverlayContainer>
        <h2>Food shortage is on the rise!</h2>
        <h2>If you are searching for a food pantry</h2>
        <StyledLink to="/food">Find a provider near you</StyledLink>
      </OverlayContainer>
    </HeroContainer>
  )
}

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  height: 110%;
  width: 50vw;
  text-align: left;
  align-items: flex-start;
  margin-top: 0px;
  padding: 16px 60px;
  background: rgba(49, 60, 64, 0.75);

  h2 {
    color: #f2f2f2;
  }
`

export const StyledLink = styled(Link)`
  padding: 16px 24px;
  text-decoration: none;
  background-color: #f26a4b;
  color: #f2f2f2;
  font-weight: 600;
  box-shadow: 0px 3px 6px #313c40;
`

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  background: url("https://res.cloudinary.com/dfxj5hpgc/image/upload/v1590886651/diego-passadori-3ylL-Qqv_tY-unsplash_clf68u.jpg");
  background-position: center center;
  background-size: cover;
  justify-content: flex-end;
  margin-bottom: 150px;
`

export default Hero
