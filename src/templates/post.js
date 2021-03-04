import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/hero'
import CodeBlock from '../components/code-block'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {MDXProvider} from '@mdx-js/react'
import styled from 'styled-components'
import {MediaQueries} from '../utils/media-queries'
import {StyledLink} from '../components/styled-link'

const StyledPost = styled.div`
  margin: 30px auto 50px;
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
  ul li {
    margin-left: 22px;
    margin-top: 10px;
  }
`

const PostFooter = styled.aside`
  margin-bottom: 40px;
  position: relative;
  a {
    margin-left: 30px;
  }
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        author
        image
      }
      body
    }
  }
`

const components = {
  pre: CodeBlock,
}

const PostTemplate = ({data: {mdx: post}}) => {
  return (
    <Layout>
      <StyledPost>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.author}</p>
        <Hero imagePath={post.frontmatter.image} />
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </StyledPost>
      <PostFooter>
        <StyledLink to="/">&larr; Back to all posts</StyledLink>
      </PostFooter>
    </Layout>
  )
}

export default PostTemplate
