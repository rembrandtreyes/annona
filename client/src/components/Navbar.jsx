import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Navbar = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Mission",
      path: "/mission",
    },
    {
      title: "Donate",
      path: "/donate",
    },
    {
      title: "Distributor",
      path: "/distributor",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ]

  return (
    <NavbarWrapper>
      <LogoWrapper>
        <span role="img" aria-label="Canned Food">
          🥫
        </span>
      </LogoWrapper>
      <div>
        {links.map(({ title, path }) => (
          <StyledLinks key={title} className="navbar-links" to={path}>
            {title}
          </StyledLinks>
        ))}
      </div>
    </NavbarWrapper>
  )
}

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0 24px;
`

export const LogoWrapper = styled.div`
  padding: 25px;

  span {
    font-size: 42px;
  }
`

export const StyledLinks = styled(Link)`
  padding: 25px;
  color: #313c40;
  text-decoration: none;
  font-weight: 600;
`

export default Navbar
