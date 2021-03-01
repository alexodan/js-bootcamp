import React from 'react'
import {createGlobalStyle} from 'styled-components'
import Navbar from './navbar'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    ${
      '' /* color: ${props => (props.theme === "purple" ? "purple" : "white")}; */
    }
  }
`

const Layout = ({children}) => {
  return (
    <div>
      <GlobalStyle theme="purple" />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
