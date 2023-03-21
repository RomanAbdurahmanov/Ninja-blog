import { FormEvent, useState } from 'react'

function Create() {
  const [title, setTitile] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [author, setAuthor] = useState<string>('mario')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)
    const blog = { title, body, author }

    setTimeout(() => {
      fetch('http://localhost:8000/blogs/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsPending(false)
      })
    }, 500)
  }

  return (
    <div className='create'>
      <h2>Create new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => {
            setTitile(e.target.value)
          }}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
          }}
        />
        <label>Author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        >
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!isPending && <button>Submit</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  )
}

export default Create
