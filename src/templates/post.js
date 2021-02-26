import {Link} from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

const PostTemplate = () => {
  return (
    <Layout>
      <h1>Post Title</h1>
      <p>Posted by (author)</p>
      <p>Post body here</p>
      <Link to="/">&larr; Back to all posts</Link>
    </Layout>
  )
}

export default PostTemplate
