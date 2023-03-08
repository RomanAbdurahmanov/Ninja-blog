import React, { useState } from 'react'

function Home() {
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName('Luigi')
    setAge(30)
  }

  return (
    <div className='content'>
      <h2>Homepage</h2>
      <h2>
        {name} is {age} years old
      </h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home
