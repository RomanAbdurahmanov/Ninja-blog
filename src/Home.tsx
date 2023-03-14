import React, { useEffect, useState } from 'react'
import BlogList, { BlogListType } from './BlogList'

function Home() {
  const [blogs, setBlogs] = useState<BlogListType | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          if (!res.ok) {
            throw Error("couldn't fetch data from this resource")
          }
          return res.json()
        })
        .then((data) => {
          setBlogs(data)
          setIsLoading(false)
          setError(null)
        })
        .catch((err) => {
          setIsLoading(false)
          setError(err.message)
        })
    }, 1000)
  }, [])

  return (
    <div className='home'>
      {error && <div> {error} </div>}
      {isLoading && <div> Loading... </div>}
      {blogs && <BlogList blogs={blogs} title='All blogs' />}
    </div>
  )
}

export default Home
