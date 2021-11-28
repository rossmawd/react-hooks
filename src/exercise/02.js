// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorageState = (name) => {
  React.useEffect(() => {
    console.log('name effect triggered')
    window.localStorage.setItem('name', name)
  },[name])
}

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(() => {
    console.log('set')
    return window.localStorage.getItem('name') || initialName
  })
  useLocalStorageState();
  const [count, setCount] = React.useState(0)


  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
      <br/>
      <button onClick={()=> setCount(count +1)}>{count}</button>
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
