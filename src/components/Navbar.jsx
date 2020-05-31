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
      title: "About",
      path: "/about",
    },
    {
      title: "Donate",
      path: "/donate",
    },
    {
      title: "Find a Food Bank",
      path: "/find",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ]

  return (
    <NavbarWrapper>
      <LogoWrapper>Logo</LogoWrapper>
      <div>
        {links.map(({ title, path }) => (
          <StyledLinks className="navbar-links" to={path}>
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
`

export const LogoWrapper = styled.div`
  padding: 25px;
`

export const StyledLinks = styled(Link)`
  padding: 25px;
  color: #313C40;
  text-decoration: none;
  font-weight: 600;
`

export default Navbar