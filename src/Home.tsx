import React, { useEffect, useState } from 'react'
import BlogList, { BlogListType } from './BlogList'

function Home() {
  const [blogs, setBlogs] = useState<BlogListType>([])

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data)
      })
  }, [])

  return (
    <div className='home'>
      {blogs && <BlogList blogs={blogs} title='All blogs' />}
    </div>
  )
}

export default Home
