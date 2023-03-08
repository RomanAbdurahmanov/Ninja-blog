import React, { useState } from 'react'
import BlogList from './BlogList'

function Home() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'luigi',
      id: 3,
    },
  ])

  return <BlogList blogs={blogs} title='All blogs' />
}

export default Home
