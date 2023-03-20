import { useState } from 'react'

function Create() {
  const [title, setTitile] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [author, setAuthor] = useState<string>('mario')

  return (
    <div className='create'>
      <h2>Create new blog</h2>
      <form>
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create
