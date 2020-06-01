import React from "react"
import styled from "styled-components"

export const Content = styled.div`
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

  ol {
    font-size: 1.2em;

    li {
      margin: 16px 0;
    }
  }
`

export const Resources = styled.p`
  margin-top: 100px;
`

const ResearchPage = () => {
  return (
    <Content>
      <h2>Our Research</h2>
      <p>
        Annona recognizes socioeconomic impacts of COVID-19 pandemic on the food
        industry. We are using data sets from the United States Environmental
        Protection Agency about food loss and waste to understand the severity
        of these issues prior pandemic so that we can project how much the food
        accessibility and distribution will be impacted after the pandemic.
      </p>
      <Resources>Resources:</Resources>
      <ol>
        <li>
          <a href="http://www.fao.org/food-loss-and-food-waste/flw-data/en/">
            http://www.fao.org/food-loss-and-food-waste/flw-data/en/
          </a>
        </li>
        <li>
          <a href="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/food-material-specific-data">
            https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/food-material-specific-data
          </a>
        </li>
        <li>
          <a href="http://www.fao.org/state-of-food-security-nutrition/en/">
            http://www.fao.org/state-of-food-security-nutrition/en/
          </a>
        </li>
      </ol>
    </Content>
  )
}

export default ResearchPage
