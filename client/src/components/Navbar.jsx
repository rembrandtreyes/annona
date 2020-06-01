import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import color from "../config/color"

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
      title: "Research",
      path: "/research",
    },
    {
      title: "Donors",
      path: "/donors",
    },
    {
      title: "Distributors",
      path: "/distributors",
    },
  ]

  return (
    <NavbarWrapper>
      <LogoWrapper>
        <img
          src="https://res.cloudinary.com/dfxj5hpgc/image/upload/v1590980349/wreath_lz7hix.png"
          alt="Logo"
        />
        <span>annona</span>
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
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-left: 8px;
    font-size: 1.618em;
    font-weight: 600;
    color: #6aa9ff;
  }

  img {
    height: 50px;
  }
`

export const StyledLinks = styled(Link)`
  padding: 25px;
  color: #313c40;
  text-decoration: none;
  font-weight: 600;
`

export default Navbar
