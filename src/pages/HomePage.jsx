import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero"

const HomePage = (props) => {
  return (
    <div className="homepage-page">
    <Hero />
      <h1>Homepage renders!</h1>
      <div className="homepage-description">DESCRIPTION STUFF</div>
      <div className="homepage-references">REFERENCES</div>
    </div>
  )
}

export default HomePage
