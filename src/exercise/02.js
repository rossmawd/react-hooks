// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorageState = (key, defaultValue = '') => {
  const [state, setState] = React.useState(() => {
    let currentState = window.localStorage.getItem(key) || defaultValue
    console.log('GETTING the state ', currentState, ' from localStorage')
    return currentState
  })

  React.useEffect(() => {
    console.log('localStorage effect triggered: saving into localStorage')
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)
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
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
