import React from "react"
import styled from "styled-components"

import color from "../config/color"

export const FooterWrapper = styled.div`
  height: 100px;
  background-color: ${color.brown};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 16px;
    color: ${color.light};
  }

  a {
    color: ${color.light};
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; annona 2020 | All rights reserved</p>
      <p>Contact us at: <a href="mailto:nasaspaceappsteam&gmail.com">nasaspaceappsteam@gmail.com</a></p>
    </FooterWrapper>
  )
}

export default Footer
