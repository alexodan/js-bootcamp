import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

const ImageBackground = {
  backgroundImage: "url('/images/buenos-aires.jpeg')",
}

const Hero = () => {
  return (
    <div style={ImageBackground}>
      <h1>Frontend Masters + Gatsby</h1>
      <p>
        Hello there <Link to="/about">About me</Link>
      </p>
    </div>
  )
}

export default Hero
