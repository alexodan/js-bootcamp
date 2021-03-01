import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
// import Hero from '../components/hero'

const Index = () => {
  return (
    <>
      {/* <Hero /> */}
      <Layout>
        <h2>Welcome!</h2>
        <Link to="/blog">Blog posts</Link>
      </Layout>
    </>
  )
}

export default Index
