import React from 'react'
import styled from 'styled-components'
import {StyledLink} from './styled-link'

const StyledNavbar = styled.nav`
  display: flex;
  height: 50px;
  background-color: #845ef7;
  color: white;
  align-items: baseline;
  padding-top: 7px;
  a h1 {
    color: white;
    padding: 0 20px;
    margin-right: 10px;
  }
`

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  li {
    margin-right: 20px;
  }
  li a {
    color: white;
    text-decoration: none;
  }
  li a:hover {
    border-bottom: 2px solid white;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">
        <h1>JS</h1>
      </StyledLink>
      <Menu>
        <li>
          <StyledLink to="/path">Course Exercises</StyledLink>
        </li>
        <li>
          <StyledLink to="/blog">Blog Posts</StyledLink>
        </li>
      </Menu>
    </StyledNavbar>
  )
}

export default Navbar
