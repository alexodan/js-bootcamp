import {graphql, Link} from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import {MediaQueries} from '../utils/media-queries'

const StyledPost = styled.div`
  margin: 0 auto;
  width: 90%;
  ${MediaQueries.FromTablet} {
    width: 60%;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    margin: 20px 0;
    line-height: 20px;
    letter-spacing: 0.3px;
  }
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const PostTemplate = ({data: {mdx: post}}) => {
  return (
    <Layout>
      <StyledPost>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.author}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Link to="/">&larr; Back to all posts</Link>
      </StyledPost>
    </Layout>
  )
}

export default PostTemplate
