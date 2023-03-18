import { Link } from 'react-router-dom'

export interface BlogType {
  title: string
  body: string
  author: string
  id: number
}

function BlogList({ blogs, title }: { blogs: BlogType[]; title: string }) {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
