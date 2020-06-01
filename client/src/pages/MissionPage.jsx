import React from "react"
import styled from "styled-components"

export const MissionWrapper = styled.div`
  height: 100vh;
  width: 800px;
  margin: 0 auto;
  padding: 50px 0 0 0;
  h2 {
    margin-bottom: 40px;
  }

  p {
    font-size: 2.1618em;
    line-height: 1.2;
  }
`

const MissionPage = () => {
  return (
    <MissionWrapper>
      <h2>Our Mission</h2>
      <p>
        To solve food supply disruptions and poverty-induced hunger by
        connecting farmers that have food waste with organizations who can
        distribute surpluses to those in need.
      </p>
    </MissionWrapper>
  )
}

export default MissionPage
