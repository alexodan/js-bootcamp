import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const Index = () => {
  return (
    <>
      <Layout>
        <h2>Welcome!</h2>
        <Link to="/blog">Blog posts</Link>
      </Layout>
    </>
  )
}

export default Index
