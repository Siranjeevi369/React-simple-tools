import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './assets/Components/Counter'
import Flippinstate from './assets/Components/Flippinstate'
import AddItem from './assets/Components/AddItem'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1 className='header'>Flip Statement</h1>
    <Flippinstate/>
    <hr />
    <h1 className='header'>Counter</h1>
    <Counter />
    <h1 className='header'>Add Item</h1>
    <AddItem/>
    </>
  )
}

export default App
