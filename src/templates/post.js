import {graphql, Link} from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import {MDXRenderer} from 'gatsby-plugin-mdx'

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
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.author}</p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Link to="/">&larr; Back to all posts</Link>
    </Layout>
  )
}

export default PostTemplate
