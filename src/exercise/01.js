// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {name ? <p>Hello {name}</p> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Jeff"/>
}

export default App
