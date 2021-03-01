import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'
import Hero from '../components/hero'

const Index = () => {
  const posts = usePosts()

  return (
    <>
      {/* <Hero /> */}
      <Layout>
        <h1>Home</h1>
        <Link to="/about">About me</Link>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}

export default Index
