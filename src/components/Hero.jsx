import React from "react"
import styled from "styled-components"

const Hero = (props) => {
  return (
    <HeroContainer>
      <OverlayContainer>
        <h1>No Food Left Behind</h1>
        <button>Learn more about contributing to 0 waste</button>
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
  background: rgba(255, 255, 255, 0.75);
`

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 800px;
  background: url("https://res.cloudinary.com/dfxj5hpgc/image/upload/v1590886651/diego-passadori-3ylL-Qqv_tY-unsplash_clf68u.jpg");
  background-position: center center;
  background-size: cover;
  justify-content: flex-end;
  margin-bottom: 125px;
`

export default Hero
