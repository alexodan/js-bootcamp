import {Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  display: flex;
  height: 50px;
  background-color: #23297a;
  color: white;
  align-items: baseline;
  padding-top: 7px;
  a {
    color: white;
    text-decoration: none;
    h1 {
      padding: 0 20px;
      margin-right: 10px;
    }
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
      <Link to="/">
        <h1>JS</h1>
      </Link>
      <Menu>
        <li>
          <Link to="/path">Course Exercises</Link>
        </li>
        <li>
          <Link to="/">Blog Posts</Link>
        </li>
      </Menu>
    </StyledNavbar>
  )
}

export default Navbar
