import React from 'react'

interface BlogType {
  title: string
  body: string
  author: string
  id: number
}

export interface BlogListType extends Array<BlogType> {}

function BlogList({
  blogs,
  title,
  handleDelete,
}: {
  blogs: BlogListType
  title: string
  handleDelete: (id: number) => void
}) {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  )
}

export default BlogList
