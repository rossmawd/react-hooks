// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

const useLocalStorageState = (whatevs) => {
  React.useEffect(() => {
    console.log('whatevs effect triggered')
      window.localStorage.setItem('whatevs', JSON.stringify(whatevs))   
  },[whatevs])
}

function Greeting({initialThing = {name: 'jeff'}}) {
  const [whatevs, setWhatevs] = React.useState(() => {
    console.log('the initial state of "whatevs" has been set')
    let whatevs = window.localStorage.getItem('whatevs')
    console.log("the type of what is stored in localStorage is", typeof whatevs)
    whatevs = JSON.parse(whatevs) 
    return whatevs || initialThing
  })
  useLocalStorageState(whatevs);
  const [count, setCount] = React.useState(0)


  function handleChange(event) {
    
    console.log('value is now', event.target.value)
    setWhatevs({name: event.target.value})
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={whatevs?.name} onChange={handleChange} id="name" />
      </form>
      {whatevs ? <strong>Hello {whatevs?.name}</strong> : 'Please type your name'}
      <br/>
      <button onClick={()=> setCount(count +1)}>{count}</button>
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
