import { useNavigate, useParams } from 'react-router-dom'
import { BlogType } from './BlogList'
import useFetch from './useFetch'

function BlogDetails() {
  const { id } = useParams()
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch<BlogType>('http://localhost:8000/blogs/' + id)

  const navigate = useNavigate()

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog?.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className='blog-details'>
      {isLoading && <div> Loading... </div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
