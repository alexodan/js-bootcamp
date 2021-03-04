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
  .gatsby-highlight-code-line {
    background-color: #feb;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #f99;
  }
  /**
  * Add back the container background-color, border-radius, padding, margin
  * and overflow that we removed from <pre>.
  */
  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }
  /**
  * Remove the default PrismJS theme background-color, border-radius, margin,
  * padding and overflow.
  * 1. Make the element just wide enough to fit its content.
  * 2. Always fill the visible space in .gatsby-highlight.
  * 3. Adjust the position of the line numbers
  */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }
  .command-line-prompt > span:before {
    color: #999;
    content: " ";
    display: block;
    padding-right: 0.8em;
  }
  /* Prompt for all users */
  .command-line-prompt > span[data-user]:before {
    content: "[" attr(data-user) "@" attr(data-host) "] $";
  }
  /* Prompt for root */
  .command-line-prompt > span[data-user="root"]:before {
    content: "[" attr(data-user) "@" attr(data-host) "] #";
  }
  .command-line-prompt > span[data-prompt]:before {
    content: attr(data-prompt);
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
