import React from 'react'
import styled from 'styled-components'
// import {Link, graphql, useStaticQuery} from 'gatsby'

const ImageBackground = styled.div`
  background-image: ${props => `url('${props.imagePath}')`};
  height: 400px;
  width: 100%;
  background-size: cover;
`

const Hero = ({imagePath}) => {
  return <ImageBackground imagePath={imagePath} />
}

export default Hero
