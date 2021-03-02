import React from 'react'
import styled from 'styled-components'
import {StyledLink} from './styled-link'

const StyledPreview = styled.article`
  max-width: 1440px;
  width: 80%;
  margin: 20px auto;
  h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }
`

const PostPreview = ({post}) => {
  return (
    <StyledPreview>
      <h3>
        <StyledLink to={`/${post.slug}`}>{post.title}</StyledLink>
      </h3>
      <p>{post.excerpt}</p>
      <StyledLink to={`/${post.slug}`}>Read the post</StyledLink>
    </StyledPreview>
  )
}

export default PostPreview
