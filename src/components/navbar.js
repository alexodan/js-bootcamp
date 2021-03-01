import {Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  display: flex;
`

const Menu = styled.ul`
  list-style-type: none;
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <h1>JS</h1>
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
